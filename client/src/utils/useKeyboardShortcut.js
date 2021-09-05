import { useState, useReducer, useEffect, useCallback } from "react";

// NOTE: the 'keys' state is ONLY a key map that stores whether a key was pressed or not!
// - Important state is 'wasFired'
// UPDATED 9/4/2021:
// - Removed 'callback' useEffect, since API design doesn't use callback

// elements to be EXEMPT from event handler(s) to
const blacklistedTargets = ["INPUT", "TEXTAREA"];

// checks if ALL keys were fired
const getFiredState = (shortcutKeys, keyState) => {
	const wereAllFired = shortcutKeys.every((key) => {
		if (keyState[key]) {
			return true;
		} else {
			return false;
		}
	});
	return wereAllFired;

	// original code
	// return shortcutKeys.reduce((wasFired, key) => {
	// 	if (keyState[key]) {
	// 		wasFired = true;
	// 		return wasFired;
	// 	}
	// 	return wasFired;
	// }, false);
};

// keyDown action handler
const keysReducer = (state, action) => {
	switch (action.type) {
		case "set-key-down":
			return { ...state, [action.key]: true };
		case "set-key-up":
			return { ...state, [action.key]: false };
		default:
			return state;
	}
};

/**
 * @description - Listens for key+combo & calls custom handler upon match.
 * - Uses 'event.key' as key identifier method.
 * @param {Array} shortcutKeys - An array of keys as string (ie 'Escape', 'H')
 * @returns {Boolean} - Returns whether shortcut was fired or not. (ie true|false)
 */
const useKeyboardShortcut = (shortcutKeys = []) => {
	// must provide array of keys
	if (!Array.isArray(shortcutKeys))
		throw new Error(
			"The first parameter to `useKeyboardShortcut` must be an ordered array of `KeyboardEvent.key` strings."
		);
	// must provide at least one key string
	if (!shortcutKeys.length)
		throw new Error(
			"The first parameter to `useKeyboardShortcut` must contain at least one `KeyboardEvent.key` string."
		);

	// creates key+combo map { shift: false, h: false, escape: false, ... }
	const initalKeyMapping = shortcutKeys.reduce((currentKeys, key) => {
		currentKeys[key.toLowerCase()] = false;
		return currentKeys;
	}, {});

	// if shortcut was triggered/fired
	const [wasFired, setWasFired] = useState(false);
	// main state & dispatch: {}
	const [keys, setKeys] = useReducer(keysReducer, {
		...initalKeyMapping,
	});

	// checks if key+combo is being held down &/or blacklisted
	// IF not, then fires 'callback()'
	const keydownListener = useCallback(
		(keydownEvent) => {
			const { key, target, repeat } = keydownEvent;
			const loweredKey = key?.toLowerCase();

			if (repeat) return; // is key is being held down
			if (blacklistedTargets?.includes(target?.tagName)) return;
			if (keys[loweredKey] === undefined) return; // if no key+combo match found

			// if target key exists in 'keys' & was pressed, then set to 'true'
			if (keys[loweredKey] === false) {
				setKeys({ type: "set-key-down", key: loweredKey });
				setWasFired(() => getFiredState(shortcutKeys, keys));
			}
		},
		[keys, shortcutKeys]
	);

	// handles resetting state when key is released
	const keyupListener = useCallback(
		(keyupEvent) => {
			const { key, target } = keyupEvent;
			const loweredKey = key?.toLowerCase();

			if (blacklistedTargets?.includes(target.tagName)) return;
			if (keys[loweredKey] === undefined) return;

			// if 'target' key is true, set to 'false' (ie reset it)
			if (keys[loweredKey] === true) {
				setKeys({ type: "set-key-up", key: loweredKey });
				setWasFired(() => getFiredState(shortcutKeys, keys));
			}
		},
		[keys, shortcutKeys]
	);

	useEffect(() => {
		window.addEventListener("keydown", keydownListener, true);
		return () => window.removeEventListener("keydown", keydownListener, true);
	}, [keydownListener]);

	useEffect(() => {
		window.addEventListener("keyup", keyupListener, true);
		return () => window.removeEventListener("keyup", keyupListener, true);
	}, [keyupListener]);

	return wasFired;
};

export { useKeyboardShortcut };
