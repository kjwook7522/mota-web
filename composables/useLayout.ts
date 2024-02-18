// Layout 상수 목록
export const APP_LAYOUT = "app-layout";

export const layoutList = [APP_LAYOUT] as const;
export const defaultLayout = APP_LAYOUT;
export type LayoutMeta = (typeof layoutList)[number];

export default () => {
    return useState<LayoutMeta>("layout", () => defaultLayout);
};
