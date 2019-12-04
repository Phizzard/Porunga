To ensure transpareny across the library and a consistent API, the following is a set of guidelines to follow in terms of approaching the design of the API.

## Composition

> Using the children property is the idiomatic way to do composition with React.

Using `props.children` is a great way to provide composition with our genereic components, however, there will be some cases where a component may benefit in only expecting explicit properties.

For the most part, API consistency matters.

## Avoid spreads

For now, lets try and keep the use of spread operators sparingly for props on a component.

## boolean vs enum

Boolean props can benefit from it's shorthand usage; you can specify them without a value.

```tsx
type Props = {
  large: boolean;
}

<Button large>SIGN UP NOW!</Button>

//is the same as...

<Button large={true}>SIGN UP NOW!</Button>
```

If they are included, it's true. If they aren't, it's false (unless stated otherwise in your default values).

The main issue is when you use these boolean props for size, variants, colours that need more than a on or off.

```tsx
type Props = {
  large: boolean
  small: boolean
  primary: boolean
  secondary: boolean
  disabled: boolean
}
```

```tsx
<Button large small primary secondary disabled>
  WUT?
</Button>
```

Instead of adding multiple props trying to fight for handling similar things we can make use of enums when needed.

```tsx
type Props = {
  size: 'small' | 'medium' | 'large'
  variant: 'primary' | 'secondary'
  disabled: boolean
}
```

```tsx
<Button variant="primary" size="large" disabled>
  Primary Large Disabled Button here
</Button>
```

The extra benefits include a more verbose API that can also handle more values when neeeded, while keeping boolean props for values that only require to be on or off.

## Give sufficient defaults

Whenever a prop is not required in a component, a sufficient defualt should be provided to minimize the amount of props needed to pass for a component to be used.

An example could be if an optional prop is a string type value, give a default value of an empty string. This will prevent having to deal with undefined or null values.

## Don't rename HTML attributes

HTML attributes already exist. Developers shouldn't have to learn a superset of HTML attributes to use the library.

If we want to give access to `aria-label`, we should give them access to that attribute through it's existing name unlike creating our own language like `screenReaderLabel`.

Keep in mind when defining props for the components to not override an existing attribute name.

```tsx
type Props = {
  type: string
}
```

```tsx
<Button type="primary">SIGN UP NOW!</Button>
```

`type` here is a prop defined to handle a potentially arbiturary rule in the library, meanwhile `type` is already an HTML attribute that the `<button />` element takes that can be `submit`,`button`,`reset` that does it's own stuff.

Ultimately, this would end up causing confusion and unexpected behaviour.

## Don't rename CSS properties

On the counter-part to renaming HTML attributes, if a component is given explicit control over a css property styling like `backgroundColor` through a prop, the prop should also be named `backgroundColor` instead of something like `bgColor`.

The latter may be shorter, but it creates a mapping of terminology that isn't quite 1:1.

The first option should keep the API more predictable with explicit styling.

## Write types and follow JSDoc comments

With the library using TypeScrpt, you many have a hard time trying to not use types, but it's important to note types are important.

JSDoc standard comments are also beneficial not only for providing a standard for commenting, but the package `styleguidist` uses these types and JSDoc comments to generate documenttion for our components in it's styleguide.

## Make it nice!

Let's make a dope component library!
