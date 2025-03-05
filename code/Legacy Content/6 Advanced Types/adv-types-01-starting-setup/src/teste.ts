export declare type ScreenDimensions = {
   height: number;
   width: number;
   screenSize: 'small' | 'large';
};

declare const useScreenResize: (widthLimit?: number) => {
   dimensions: ScreenDimensions;
   isSmallScreen: boolean;
   isLargeScreen: boolean;
};

export default useScreenResize;
