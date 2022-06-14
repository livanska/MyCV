declare module '*.scss' {
  const content: { [className: string]: string };
  export = content;
}
declare module '*.svg' {
  const content: any;
  export default content;
}
declare module '*.png';
declare module '*.jpg';

declare module '*.json' {
  const value: any;
  export default value;
}
