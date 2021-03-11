## 设计模式

​`设计模式`是软件开发人员在软件开发过程中面临的一些具有代表性问题的**解决方案**。这些解决方案是众多软件开发人员经过相当长的一段时间的试验和错误总结出来的；
### 单例模式

**单例模式**（Singleton Pattern）又称为**单体模式**，保证一个类只有一个实例，并提供一个访问它的全局访问点。
- 通过静态属性创建单例
- 通过高阶函数创建单例
- 优缺点
  - 优点：节约内存，节约性能
  - 缺点：扩展性不强

### 工厂模式

**工厂模式** （Factory Pattern），封装具体实例创建逻辑和过程，外部只需要根据不同条件返回不同的实例。
- 优点：实现代码复用性，封装良好，抽象逻辑；
- 缺点：增加了代码复杂程度；

### 装饰者模式

**装饰者模式** （Decorator Pattern）使用一种更为灵活的方式来动态给一个对象/函数等添加额外信息
- 扩展功能和继承类似
- 扩展不同类的功能，和原始类并无关联；
- 装饰者链

### 观察者模式

**观察者模式** （Observer Pattern） 定义一个对象与其他对象之间的一种依赖关系，当对象发生某种变化的时候，依赖它的其它对象都会得到更新
- 自定义事件绑定addEvent
- 自定义事件触发trigger
- 自定义事件移除removeEvent
- 实现案例GameEvent类

