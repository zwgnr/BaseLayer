import { ClassValue as ClassValueX, clsx } from "clsx";
import React, { ComponentType, ReactElement } from "react";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValueX[]) {
  return twMerge(clsx(inputs));
}

type CompoundVariant = Record<string, string | number> & { class?: string; };

type Variants = {
  base?: string;
  variants?: Record<string, Record<string, string>>;
  defaultVariants?: Record<string, string>;
  compoundVariants?: CompoundVariant[];
};

export type VariantProps<T extends Variants | undefined> = T extends Variants
  ? { [K in keyof T['variants'] ]?: keyof T['variants'][K] }
  : {};

type ClassesProp<T extends Variants | undefined> = string | T;


function useVariantClasses<T>(classes: Variants, props: T) {
  const { base, variants, defaultVariants, compoundVariants } = classes;

  let variantClasses = base || "";

  if (variants && defaultVariants) {
    for (let variantName in variants) {
      const variantValue = (props as any)[variantName] || defaultVariants[variantName];
      if (variantValue && variants[variantName][variantValue]) {
        variantClasses += " " + variants[variantName][variantValue];
      }
    }
  }

  if (compoundVariants) {
    for (let cv of compoundVariants) {
      if (Object.keys(cv).every(key => key === "class" || (props as any)[key] === cv[key])) {
        variantClasses += " " + cv.class;
      }
    }
  }

  return variantClasses;
}


type ComponentProps<T> = T extends ComponentType<infer P>
  ? P
  : T extends keyof JSX.IntrinsicElements
  ? JSX.IntrinsicElements[T]
  : never;

  type ComponentOrTagName = ComponentType<any> | keyof JSX.IntrinsicElements;

  type PropsWithClassName<T> = ComponentProps<T> & { className?: string };
  type PropsWithVariants<T, V extends Variants | undefined> = ComponentProps<T> & VariantProps<V> & { className?: string };
  
  type PotionedComponent<T extends ComponentOrTagName, V extends Variants | undefined> = (props: PropsWithVariants<T, V>) => ReactElement;
  
  export function styled<
    T extends ComponentOrTagName,
    V extends Variants | undefined
  >(
    Component: T,
    classesProp: ClassesProp<V>
  ): PotionedComponent<T, V> {
    return (props: PropsWithVariants<T, V>) => {
      const { className, ...rest } = props;
      let classes;
      if (typeof classesProp === "string") {
        classes = classesProp;
      } else {
        classes = useVariantClasses(classesProp as Variants, props);
      }
      const newClassName = cn(classes, className);
      return React.createElement(Component, {...rest, className: newClassName} as PropsWithClassName<T>);
    };
  }
  