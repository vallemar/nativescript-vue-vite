import { ref, $navigateBack } from 'nativescript-vue';
const items = ref(Array(1000)
    .fill(0)
    .map((_, index) => `Item ${index + 1}`));
; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_fnComponent = (await import('nativescript-vue')).defineComponent({});
;
let __VLS_functionalComponentProps;
function __VLS_template() {
    const __VLS_ctx = {};
    const __VLS_localComponents = {
        ...{},
        ...{},
        ...__VLS_ctx,
    };
    let __VLS_components;
    const __VLS_localDirectives = {
        ...{},
        ...__VLS_ctx,
    };
    let __VLS_directives;
    let __VLS_styleScopedClasses;
    let __VLS_resolvedLocalAndGlobalComponents;
    const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.Page;
    /** @type { [typeof __VLS_components.Page, typeof __VLS_components.Page, ] } */
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ actionBarHidden: ("true"), }));
    const __VLS_2 = __VLS_1({ actionBarHidden: ("true"), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    var __VLS_6 = {};
    const __VLS_7 = __VLS_resolvedLocalAndGlobalComponents.GridLayout;
    /** @type { [typeof __VLS_components.GridLayout, typeof __VLS_components.GridLayout, ] } */
    // @ts-ignore
    const __VLS_8 = __VLS_asFunctionalComponent(__VLS_7, new __VLS_7({ rows: ("auto, *"), }));
    const __VLS_9 = __VLS_8({ rows: ("auto, *"), }, ...__VLS_functionalComponentArgsRest(__VLS_8));
    const __VLS_13 = __VLS_resolvedLocalAndGlobalComponents.Label;
    /** @type { [typeof __VLS_components.Label, ] } */
    // @ts-ignore
    const __VLS_14 = __VLS_asFunctionalComponent(__VLS_13, new __VLS_13({ ...{ 'onTap': {} }, text: ("Go Back"), ...{ class: ("text-center px-4 py-10 text-2xl text-gray-900 font-bold") }, }));
    const __VLS_15 = __VLS_14({ ...{ 'onTap': {} }, text: ("Go Back"), ...{ class: ("text-center px-4 py-10 text-2xl text-gray-900 font-bold") }, }, ...__VLS_functionalComponentArgsRest(__VLS_14));
    let __VLS_19;
    const __VLS_20 = {
        onTap: (__VLS_ctx.$navigateBack)
    };
    let __VLS_16;
    let __VLS_17;
    var __VLS_18;
    const __VLS_21 = __VLS_resolvedLocalAndGlobalComponents.ContentView;
    /** @type { [typeof __VLS_components.ContentView, typeof __VLS_components.ContentView, ] } */
    // @ts-ignore
    const __VLS_22 = __VLS_asFunctionalComponent(__VLS_21, new __VLS_21({ row: ("1"), ...{ class: ("bg-[#65adf1] rounded-t-3xl") }, }));
    const __VLS_23 = __VLS_22({ row: ("1"), ...{ class: ("bg-[#65adf1] rounded-t-3xl") }, }, ...__VLS_functionalComponentArgsRest(__VLS_22));
    const __VLS_27 = __VLS_resolvedLocalAndGlobalComponents.ListView;
    /** @type { [typeof __VLS_components.ListView, typeof __VLS_components.ListView, ] } */
    // @ts-ignore
    const __VLS_28 = __VLS_asFunctionalComponent(__VLS_27, new __VLS_27({ items: ((__VLS_ctx.items)), separatorColor: ("transparent"), ...{ class: ("bg-transparent") }, }));
    const __VLS_29 = __VLS_28({ items: ((__VLS_ctx.items)), separatorColor: ("transparent"), ...{ class: ("bg-transparent") }, }, ...__VLS_functionalComponentArgsRest(__VLS_28));
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        const { default: __VLS_thisSlot } = __VLS_nonNullable(__VLS_32.slots);
        const [{ item }] = __VLS_getSlotParams(__VLS_thisSlot);
        const __VLS_33 = __VLS_resolvedLocalAndGlobalComponents.GridLayout;
        /** @type { [typeof __VLS_components.GridLayout, typeof __VLS_components.GridLayout, ] } */
        // @ts-ignore
        const __VLS_34 = __VLS_asFunctionalComponent(__VLS_33, new __VLS_33({ columns: ("*, auto"), ...{ class: ("px-4") }, }));
        const __VLS_35 = __VLS_34({ columns: ("*, auto"), ...{ class: ("px-4") }, }, ...__VLS_functionalComponentArgsRest(__VLS_34));
        const __VLS_39 = __VLS_resolvedLocalAndGlobalComponents.Label;
        /** @type { [typeof __VLS_components.Label, ] } */
        // @ts-ignore
        const __VLS_40 = __VLS_asFunctionalComponent(__VLS_39, new __VLS_39({ text: ((item)), ...{ class: ("text-3xl py-3 text-white") }, }));
        const __VLS_41 = __VLS_40({ text: ((item)), ...{ class: ("text-3xl py-3 text-white") }, }, ...__VLS_functionalComponentArgsRest(__VLS_40));
        const __VLS_45 = __VLS_resolvedLocalAndGlobalComponents.ContentView;
        /** @type { [typeof __VLS_components.ContentView, ] } */
        // @ts-ignore
        const __VLS_46 = __VLS_asFunctionalComponent(__VLS_45, new __VLS_45({ col: ("1"), ...{ class: ("w-5 h-5 rounded-full bg-white") }, }));
        const __VLS_47 = __VLS_46({ col: ("1"), ...{ class: ("w-5 h-5 rounded-full bg-white") }, }, ...__VLS_functionalComponentArgsRest(__VLS_46));
        __VLS_nonNullable(__VLS_38.slots).default;
        var __VLS_38;
    }
    var __VLS_32;
    __VLS_nonNullable(__VLS_26.slots).default;
    var __VLS_26;
    __VLS_nonNullable(__VLS_12.slots).default;
    var __VLS_12;
    __VLS_nonNullable(__VLS_5.slots).default;
    var __VLS_5;
    __VLS_styleScopedClasses['text-center'];
    __VLS_styleScopedClasses['px-4'];
    __VLS_styleScopedClasses['py-10'];
    __VLS_styleScopedClasses['text-2xl'];
    __VLS_styleScopedClasses['text-gray-900'];
    __VLS_styleScopedClasses['font-bold'];
    __VLS_styleScopedClasses['bg-[#65adf1]'];
    __VLS_styleScopedClasses['rounded-t-3xl'];
    __VLS_styleScopedClasses['bg-transparent'];
    __VLS_styleScopedClasses['px-4'];
    __VLS_styleScopedClasses['text-3xl'];
    __VLS_styleScopedClasses['py-3'];
    __VLS_styleScopedClasses['text-white'];
    __VLS_styleScopedClasses['w-5'];
    __VLS_styleScopedClasses['h-5'];
    __VLS_styleScopedClasses['rounded-full'];
    __VLS_styleScopedClasses['bg-white'];
    var __VLS_slots;
    var __VLS_inheritedAttrs;
    const __VLS_refs = {};
    var $refs;
    var $el;
    return {
        attrs: {},
        slots: __VLS_slots,
        refs: $refs,
        rootEl: $el,
    };
}
;
const __VLS_self = (await import('nativescript-vue')).defineComponent({
    setup() {
        return {
            $navigateBack: $navigateBack,
            items: items,
        };
    },
});
export default (await import('nativescript-vue')).defineComponent({
    setup() {
        return {};
    },
});
; /* PartiallyEnd: #4569/main.vue */
//# sourceMappingURL=Details.vue.js.map