import { useEffect } from 'react'

export const useClickOutside = (/*ref, handler*/) => {
 
    useEffect(() => {

        const listener = (event) => {
            if(!ref.current || ref.current.contains(event.target)) {
                return
            }
            handler(handler);
        }

        return () => {
            cleanup
        }
    })

}
