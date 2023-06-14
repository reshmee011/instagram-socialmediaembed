import { useState } from 'react'

export const useConstructor = (callback = (): void => undefined): void => {
    const [hasBeenCalled, setHasBeenCalled] = useState(false)
    if (hasBeenCalled) return;
    callback();
    setHasBeenCalled(true);
}