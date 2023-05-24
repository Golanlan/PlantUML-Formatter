# PlantUML Formatter

Welcome to the PlantUML Formatter! This tool was created out of my own painful experience with messy and non-indented PlantUML code. The formatter aims to make your PlantUML code more readable and maintainable by automatically applying proper indentation and formatting.

## Getting Started

To use the PlantUML Formatter, simply visit our website: [https://golanlan.github.io/PlantUML-Formatter/](https://golanlan.github.io/PlantUML-Formatter/). The website provides a user-friendly interface where you can enter your PlantUML code and instantly see the formatted version.

## Example

Here's a small example to demonstrate the power of the PlantUML Formatter. Consider the following messy and non-indented PlantUML code:

```
@startuml
class Foo

group Group 1 {
class Bar
class Baz

group Group 2 {
class Quux
class Quuux
}

alt Condition {
:Option 1;
-[Yes]-> Option 1;
-[No]-> Option 2;
}
}
@enduml
```

After running this code through the PlantUML Formatter, the result will be beautifully formatted code:

```
@startuml
class Foo
group Group 1 {
    class Bar
    class Baz
    group Group 2 {
        class Quux
        class Quuux
    }
    alt Condition {
        :Option 1;
        -[Yes]-> Option 1;
        -[No]-> Option 2;
    }
}
@enduml
```

As you can see, the PlantUML Formatter automatically indents the code and improves its readability.

## Contributing

If you have any suggestions, bug reports, or would like to contribute to the PlantUML Formatter, feel free to open an issue or submit a pull request on [GitHub](https://github.com/golanlan/PlantUML-Formatter). I welcome any feedback and appreciate your contributions!

## License

This project is licensed under the [MIT License](https://github.com/golanlan/PlantUML-Formatter/blob/main/LICENSE).

---

We hope that the PlantUML Formatter helps you in your PlantUML adventures. Happy coding and keep your PlantUML code clean and organized!

If you have any questions or need assistance, don't hesitate to reach out. Enjoy formatting your PlantUML code!
