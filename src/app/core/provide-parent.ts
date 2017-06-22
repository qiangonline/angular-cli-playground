import { forwardRef } from '@angular/core';
const provideParent = (component: any, type?: any) => {
    return {
        provide: type,
        useExisting: forwardRef(() => component)
    }
};
export { provideParent };