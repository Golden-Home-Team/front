import 'styled-components';
import { color } from './theme';

declare module 'styled-components' {
    export interface DefaultTheme {
        color: typeof color;
        size: {
            mobileMaxWidth: number,
            borderRadius: string,
        }
    }
}
