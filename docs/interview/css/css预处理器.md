# css 预处理器

CSS 本身不属于可编程语言，当前端项目逐渐庞大之后 CSS 的维护也愈加困难。CSS 预处理器所做的本质上是为 CSS 增加一些可编程的特性，通过**变量、嵌套、简单的程序逻辑、计算、函数**等特性，通过工程化的手段让 CSS 更易维护，提升开发效率。

## SASS

Sass 在完全兼容 CSS 语法的前提下，给 CSS 提供了变量、嵌套、混合、操作符、自定义函数等可编程能力。

Sass 常用的有几种功能：

- 变量：变量中可以存储颜色、字体或任何 CSS 值。
- 嵌套：可嵌套 CSS 选择器，提供清晰的层次结构。
- 混合：可以定义&重用代码块。
- 扩展/集成：可以在一个选择器内继承另一个选择器。
- 操作符：可以在 CSS 中使用操作符进行计算。
- 条件/循环语句：可以循环/条件生成 CSS。
- 自定义函数：可以自定义复杂操作的函数。


## LESS

Less 常用的有几种功能：

- 变量：变量中可以存储颜色、字体或任何 CSS 值。
- 嵌套：可嵌套 CSS 选择器，提供清晰的层次结构。
- 混合：可以定义&重用的代码块。
- 扩展/集成：可以在一个选择器内继承另一个选择器。
- 运算：可以在 CSS 中进行计算。
- 条件/循环语句：可以循环/条件生成 CSS。

缺点

- 不支持自定义函数（可通过 mixins 实现简单逻辑）。
- 编程能力相对较弱。


### 声明和使用变量

sass 使用 `$` 声明变量

```scss
$width: 5em;

#app {
  width: $width;
}
```

less 使用`@` 符号声明变量

```less
@width: 10px;
@height: @width + 10px;

#header {
  width: @width;
  height: @height;
}
```

原生css 声明变量的时候，变量名前面要加两根连词线 `--` 使用变量 `var()`

```css
body {
  --foo: #7F583F;
  --bar: #F7EFD2;
}

a {
  color: var(--foo);
  text-decoration-color: var(--bar);
}
```


### 嵌套

sass 可以用 & 代表嵌套规则外层的父选择器

```scss
#main {
  color: black;
  a {
    font-weight: bold;
    &:hover { color: red; }
  }
}
```

less 和sass 类似

```less
#header {
  color: black;
  .navigation {
    font-size: 12px;
  }
  .logo {
    width: 300px;
  }
}
```

### SASS支持条件语句 LESS不支持

SASS可以使用if{}else，for循环等等，LESS不支持


```scss
 /* Sample Sass “if” statement */
  
 @if lightness($color) > 30% {
  
 } @else {
 
 }
  
 /* Sample Sass “for” loop */
  
 @for $i from 1 to 10 {
   .border-#{$i} {
     border: #{$i}px solid blue;
   }
 
```