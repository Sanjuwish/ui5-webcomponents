commit 0de21e8ba37c6a75fd3d2a29a16cc82661619cb1
Author: Stoyan <88034608+hinzzx@users.noreply.github.com>
Date:   Wed May 17 14:33:02 2023 +0300

    feat(framework): use `template literal notation` for enum types (#6856)
    
    То improve the development experience, we opted for using **template literal types**, but also keeping the Enums, like this:
    ```js
    layout: `${ MediaGalleryLayout }`;
    ```This will result in union type of all the values from the Enum (“Auto” | “Vertical” | “Horizontal”). This way, the user will not have to import the Enum and set the required string, without any TS compiler errors and still having the static type checking.
    - In general, for Public APIs, that we expect input from consumers (public properties, public functions' parameters)
    ```js
     myPublicProp: `${ MyEnumType }`;
    ```
    - For public API's params:
    ```ts
     const myPublicFn => (arg: `${MyEnumType}`) => {};
    ```
    
    Fixes: #6636
