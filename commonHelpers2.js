import"./assets/modulepreload-polyfill-ec808ebb.js";import{i as o}from"./assets/vendor-585fe19e.js";const s=document.querySelector(".form"),r=s.querySelector('input[name="delay"]');function a(i){i.preventDefault();const t=r.value,m=s.elements.state.value;new Promise((e,n)=>{setTimeout(m==="fulfilled"?()=>e(t):()=>n(t),t)}).then(e=>{o.success({message:`✅ Fulfilled promise in ${e}ms`,position:"topRight"})}).catch(e=>{o.error({message:`❌ Rejected promise in ${e}ms`,position:"topRight"})})}s.addEventListener("submit",a);
//# sourceMappingURL=commonHelpers2.js.map
