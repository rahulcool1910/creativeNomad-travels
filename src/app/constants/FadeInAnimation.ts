// import { createAnimation } from '@ionic/angular';
// import { Animation } from '@ionic/core';
// export function myFadeInAnimation(
//     baseEl: HTMLElement,
//     AnimationC: Animation,
// ): Animation {
//     const baseAnimation = createAnimation();
//     const backdropAnimation = createAnimation();
//     console.log(baseEl.querySelector('ion-backdrop'),
//         baseEl.querySelector('.modal-wrapper'))
//     backdropAnimation.addElement(baseEl.querySelector('ion-backdrop'));
//     const wrapperAnimation = createAnimation();
//     wrapperAnimation.addElement(baseEl.querySelector('.modal-wrapper'));
//     wrapperAnimation
//         .beforeStyles({ opacity: 1 })
//         .fromTo('translateX', '0%', '100%');
//     backdropAnimation.fromTo('opacity', 0.01, 0.9);
//     return baseAnimation
//             .addElement(baseEl)
//             .easing('cubic-bezier(0.36,0.66,0.04,1)')
//             .duration(1000)
//             .beforeAddClass('show-modal')
//         .addAnimation(backdropAnimation)
//         .addAnimation(wrapperAnimation)
// }

import { createAnimation, Animation } from '@ionic/core';

export function myFadeInAnimation(rootElement: HTMLElement): Animation {
    const imageAnimation = createAnimation()
        .addElement(rootElement.querySelector('img'))
        .easing('ease-in-out')
        .duration(400)
        .fromTo('opacity', 0, 1)
        .fromTo('width', '320px', '100%')
        .fromTo('height', '490px', '100%')
        .beforeAddClass("absoulte")
        .fromTo('transform', 'translateY(-50%)', 'translateY(0%)')
        .afterRemoveClass("absolute")

    return createAnimation()
        .addElement(rootElement.querySelector('.modal-wrapper'))
        .afterStyles({ backgroundColor: 'red' })
        .easing('ease-in-out')
        .duration(800)
        .beforeStyles({ transform: 'none', background: 'white', 'box-shadow': "none" })
        .fromTo('opacity', 0.5, 1)
        // .fromTo('transform', 'translateY(50%)', 'translateY(0%)')
        .addAnimation(imageAnimation)
        ;
}