import clsx, { ClassValue } from "clsx";
import React, { ComponentType, ReactElement } from "react";
import { ClassNameValue, twJoin, twMerge } from "tailwind-merge";

export const cx = (...args: ClassValue[]) => twMerge(clsx(args));

type CompoundVariant = Record<string, string | number> & { class?: string };

export type Variants = {
  base?: string;
  variants?: Record<string, Record<string, string>>;
  defaultVariants?: Record<string, string>;
  compoundVariants?: CompoundVariant[];
};

export type VariantProps<T extends Variants | undefined> = T extends Variants
  ? { [K in keyof T["variants"]]?: keyof T["variants"][K] }
  : {};

type ClassesProp<T extends Variants | undefined> = string | T;

function useVariantClasses<T>(classes: Variants, props: T) {
  const { base, variants, defaultVariants, compoundVariants } = classes;

  let variantClasses = base || "";

  if (variants && defaultVariants) {
    for (let variantName in variants) {
      const variantValue =
        (props as any)[variantName] || defaultVariants[variantName];
      if (variantValue && variants[variantName][variantValue]) {
        variantClasses += " " + variants[variantName][variantValue];
      }
    }
  }

  if (compoundVariants) {
    for (let cv of compoundVariants) {
      if (
        Object.keys(cv).every(
          (key) => key === "class" || (props as any)[key] === cv[key]
        )
      ) {
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
type PropsWithVariants<T, V extends Variants | undefined> = ComponentProps<T> &
  VariantProps<V> & { className?: string };

type StyledComponent<
  T extends ComponentOrTagName,
  V extends Variants | undefined
> = (props: PropsWithVariants<T, V>) => ReactElement;

export function styled<
  T extends ComponentOrTagName,
  V extends Variants | undefined
>(Component: T, classesProp: ClassesProp<V>): StyledComponent<T, V> {
  return (props: PropsWithVariants<T, V>) => {
    const { className, ...rest } = props;
    let classes;
    if (typeof classesProp === "string") {
      classes = classesProp;
    } else {
      classes = useVariantClasses(classesProp as Variants, props);
    }
    const newClassName = cx(classes, className);
    return React.createElement(Component, {
      ...rest,
      className: newClassName,
    } as PropsWithClassName<T>);
  };
}

type VVariants = Record<string, Record<string, string>>;

type VVariantKeys<T extends Variants> = {
  [K in keyof T]?: keyof T[K];
};

type VClassesProp<T extends Variants> = {
  base: string;
  variants: T;
  defaultVariants: T
};

export function v<T extends VVariants>(classesProp: VClassesProp<T>) {
  const { base, variants } = classesProp;
  return (props?: VVariantKeys<T>) => {
    const variantClass = Object.keys(variants)
      .map((variantKey: string) => {
        const propKey = props && props[variantKey as keyof typeof props];
        return propKey && variants[variantKey][propKey as string];
      })
      .join(' ');
    return `${base} ${variantClass}`;
  };
}

export type ExtractVariantProps<T> = T extends (props: infer P) => string ? P : never;


