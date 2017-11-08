# Schemas and Types

[GraphQL](http://graphql.org/) is based on a query language about selecting specific properties on objects, example:

```
{
  Person {
    name
    age
  }
}
```

In this way the result is predictable without know much about server.

[GraphQL](http://graphql.org/) can be written in any language that means we can create `GraphQL schemas` in a language-agnostic way.

## Object Types and Fields
The most basic components of a `GraphQL schema` are object types, which represent an object you can fetch from the server and its structure, example of a `GraphQL Object Type`:

```
type Person {
  name: String!
  age: Number!
}
```

## Arguments
Every `GraphQL Object Type`'s field can have zero or more arguments.

```
type Person {
  name: String!
  age(legalAge: age = 18 ) : Number!
}
```

- Arguments are named
- Arguments can be optional or required
  - If an argument is optional we can define a default value

## Resolver
Provides a mapping between of a `GraphQL` operations and actual Back End code for handling it.
