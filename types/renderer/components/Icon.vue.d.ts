declare const _default: import("vue").DefineComponent<__VLS_TypePropsToRuntimeProps<{
    iconUrl: string;
    size?: string | undefined;
    color?: string | undefined;
    hoverColor?: string | undefined;
    clickable?: boolean | undefined;
    title?: string | undefined;
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<__VLS_TypePropsToRuntimeProps<{
    iconUrl: string;
    size?: string | undefined;
    color?: string | undefined;
    hoverColor?: string | undefined;
    clickable?: boolean | undefined;
    title?: string | undefined;
}>>>, {}>;
export default _default;
type __VLS_NonUndefinedable<T> = T extends undefined ? never : T;
type __VLS_TypePropsToRuntimeProps<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: import('vue').PropType<__VLS_NonUndefinedable<T[K]>>;
    } : {
        type: import('vue').PropType<T[K]>;
        required: true;
    };
};