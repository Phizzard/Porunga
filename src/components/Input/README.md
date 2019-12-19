Default Input

```jsx
<Input label="Name" />
```

Input (Placeholder)

```jsx
<Input label="Name" placeholder="Enter Your First Name" />
```

Input (Disabled)

```jsx
<Input label="Name" value="David Hayter" disabled />
```

Input (Required)

```jsx
<form>
  <Input label="Name" required />
  <input type="submit" />
</form>
```

Input (Bottom Text)

```jsx
<Input label="Name" bottomText="The user's first name" />
```

Input (Border Color)

```jsx
<Input
  label="Name"
  borderColorActive="pink"
  borderColorInactive="green"
  hideLabel
/>
```

Input (Alternate Types)

```jsx
<Input label="Datetime" type="datetime-local" />
<Input label="Week" type="week" />
<Input label="Month" type="month" />
<Input label="Time" type="time" />
<Input label="Password" type="password" value="I'm hidden" />
```

Input (Pattern Matching)

```jsx
<form>
  <Input
    label="Enter Password"
    name="password"
    pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
    title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
    type="password"
  />
  <input type="submit" />
</form>
```
