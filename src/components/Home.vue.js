import { ref, computed, onMounted, onUnmounted, $navigateTo, } from 'nativescript-vue';
import Details from './Details.vue';
const counter = ref(0);
const message = computed(() => {
    return `Blank {N}-Vue app: ${counter.value}`;
});
function logMessage() {
    console.log('You have tapped the message!');
}
let interval;
onMounted(() => {
    console.log('mounted');
    interval = setInterval(() => counter.value++, 100);
});
onUnmounted(() => {
    console.log('unmounted');
    clearInterval(interval);
});
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
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.Frame;
    /** @type { [typeof __VLS_components.Frame, typeof __VLS_components.Frame, ] } */
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({}));
    const __VLS_2 = __VLS_1({}, ...__VLS_functionalComponentArgsRest(__VLS_1));
    var __VLS_6 = {};
    const __VLS_7 = __VLS_resolvedLocalAndGlobalComponents.Page;
    /** @type { [typeof __VLS_components.Page, typeof __VLS_components.Page, ] } */
    // @ts-ignore
    const __VLS_8 = __VLS_asFunctionalComponent(__VLS_7, new __VLS_7({}));
    const __VLS_9 = __VLS_8({}, ...__VLS_functionalComponentArgsRest(__VLS_8));
    const __VLS_13 = __VLS_resolvedLocalAndGlobalComponents.ActionBar;
    /** @type { [typeof __VLS_components.ActionBar, typeof __VLS_components.ActionBar, ] } */
    // @ts-ignore
    const __VLS_14 = __VLS_asFunctionalComponent(__VLS_13, new __VLS_13({}));
    const __VLS_15 = __VLS_14({}, ...__VLS_functionalComponentArgsRest(__VLS_14));
    const __VLS_19 = __VLS_resolvedLocalAndGlobalComponents.Label;
    /** @type { [typeof __VLS_components.Label, ] } */
    // @ts-ignore
    const __VLS_20 = __VLS_asFunctionalComponent(__VLS_19, new __VLS_19({ text: ("Home"), ...{ class: ("font-bold text-lg") }, }));
    const __VLS_21 = __VLS_20({ text: ("Home"), ...{ class: ("font-bold text-lg") }, }, ...__VLS_functionalComponentArgsRest(__VLS_20));
    __VLS_nonNullable(__VLS_18.slots).default;
    var __VLS_18;
    const __VLS_25 = __VLS_resolvedLocalAndGlobalComponents.GridLayout;
    /** @type { [typeof __VLS_components.GridLayout, typeof __VLS_components.GridLayout, ] } */
    // @ts-ignore
    const __VLS_26 = __VLS_asFunctionalComponent(__VLS_25, new __VLS_25({ rows: ("*, auto, auto, *"), ...{ class: ("px-4") }, }));
    const __VLS_27 = __VLS_26({ rows: ("*, auto, auto, *"), ...{ class: ("px-4") }, }, ...__VLS_functionalComponentArgsRest(__VLS_26));
    const __VLS_31 = __VLS_resolvedLocalAndGlobalComponents.Label;
    /** @type { [typeof __VLS_components.Label, ] } */
    // @ts-ignore
    const __VLS_32 = __VLS_asFunctionalComponent(__VLS_31, new __VLS_31({ ...{ 'onTap': {} }, row: ("1"), ...{ class: ("text-xl align-middle text-center text-gray-500") }, text: ((__VLS_ctx.message)), }));
    const __VLS_33 = __VLS_32({ ...{ 'onTap': {} }, row: ("1"), ...{ class: ("text-xl align-middle text-center text-gray-500") }, text: ((__VLS_ctx.message)), }, ...__VLS_functionalComponentArgsRest(__VLS_32));
    let __VLS_37;
    const __VLS_38 = {
        onTap: (__VLS_ctx.logMessage)
    };
    let __VLS_34;
    let __VLS_35;
    var __VLS_36;
    const __VLS_39 = __VLS_resolvedLocalAndGlobalComponents.Button;
    /** @type { [typeof __VLS_components.Button, typeof __VLS_components.Button, ] } */
    // @ts-ignore
    const __VLS_40 = __VLS_asFunctionalComponent(__VLS_39, new __VLS_39({ ...{ 'onTap': {} }, row: ("2"), ...{ class: ("mt-4 px-4 py-2 bg-white border-2 border-blue-400 rounded-lg") }, horizontalAlignment: ("center"), }));
    const __VLS_41 = __VLS_40({ ...{ 'onTap': {} }, row: ("2"), ...{ class: ("mt-4 px-4 py-2 bg-white border-2 border-blue-400 rounded-lg") }, horizontalAlignment: ("center"), }, ...__VLS_functionalComponentArgsRest(__VLS_40));
    let __VLS_45;
    const __VLS_46 = {
        onTap: (...[$event]) => {
            __VLS_ctx.$navigateTo(__VLS_ctx.Details);
        }
    };
    let __VLS_42;
    let __VLS_43;
    __VLS_nonNullable(__VLS_44.slots).default;
    var __VLS_44;
    __VLS_nonNullable(__VLS_30.slots).default;
    var __VLS_30;
    __VLS_nonNullable(__VLS_12.slots).default;
    var __VLS_12;
    __VLS_nonNullable(__VLS_5.slots).default;
    var __VLS_5;
    __VLS_styleScopedClasses['font-bold'];
    __VLS_styleScopedClasses['text-lg'];
    __VLS_styleScopedClasses['px-4'];
    __VLS_styleScopedClasses['text-xl'];
    __VLS_styleScopedClasses['align-middle'];
    __VLS_styleScopedClasses['text-center'];
    __VLS_styleScopedClasses['text-gray-500'];
    __VLS_styleScopedClasses['mt-4'];
    __VLS_styleScopedClasses['px-4'];
    __VLS_styleScopedClasses['py-2'];
    __VLS_styleScopedClasses['bg-white'];
    __VLS_styleScopedClasses['border-2'];
    __VLS_styleScopedClasses['border-blue-400'];
    __VLS_styleScopedClasses['rounded-lg'];
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
            $navigateTo: $navigateTo,
            Details: Details,
            message: message,
            logMessage: logMessage,
        };
    },
});
export default (await import('nativescript-vue')).defineComponent({
    setup() {
        return {};
    },
});
; /* PartiallyEnd: #4569/main.vue */
//# sourceMappingURL=Home.vue.js.map