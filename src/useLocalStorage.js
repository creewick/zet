import { useState } from 'react';

export default function useLocalStorage(name, value) {
    const [get, set] = useState(localStorage[name]
        ? JSON.parse(localStorage[name])
        : value);

    if (!localStorage[name]) localStorage[name] = JSON.stringify(get);

    const newSet = (newValue) => {
        localStorage[name] = JSON.stringify(newValue);
        set(newValue);
    };

    return [get, newSet];
}
