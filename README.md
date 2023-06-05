# Demo de Microfront Monorepo con Module Federate

Proyecto generado con [Angular CLI](https://github.com/angular/angular-cli) version 14.2.11.

# Ejecutar proyecto

Debes estar en la raíz del proyecto `microfront-angular14`

```
npm i
```

```
npm run all
```

# Estructura del proyecto

- projects
  - commons-lib (library-compartida)
  - mf-payment (application-remote)
  - mf-shell (application-host)
  - mf-shopping (application-remote)
- package.json
- README.md
- ...

## commons-lib

Este proyecto es de tipo librería, es el elemento que usamos para compartir elementos entre los microfrontend

Fue generado con el comando:

```
ng generate library commons-lib
```

## mf-payment

Este proyecto es de tipo aplicación y configurada como remote en Webpack, se encarga de mostrar los Productos agregados del carrito, que estan guardados en el localStorage con key `products`

Fue generado con el comando:

```
ng generate application mf-payment --style=scss
```

Y configurado como `remote` con el comando:

```
ng add @angular-architects/module-federation --project mf-payment --port 4202 --type remote
```

Cabe mencionar que este es de tipo [standalone](https://angular.io/guide/standalone-components) y tambien se puede configurar como `remote` para Webpack ya que lo considera un módulo.

## mf-shopping

Este proyecto es de tipo aplicación y configurada como remite en Webpack, se encarga de cargar una lista de Productos y utilizar la libreria **commons-lib** para enviar la información al LocalStorage y emitir la actualización de la cantidad del carrito.

Fue generado con el comando:

```
ng generate application mf-shopping --style=scss --routing=true
```

Y configurado como `remote` con el comando:

```
ng add @angular-architects/module-federation --project mf-shopping --port 4201 --type remote
```

## mf-shell

Este proyecto es de tipo aplicación y configurada como host en Webpack, se encarga de `embeber` los otros microfronteds de tipo `remote`. Este es el proyecto que correra como principal.

Fue generado con el comando:

```
ng generate application mf-shell --style=scss --routing=true
```

Y configurado como `host` con el comando:

```
ng add @angular-architects/module-federation --project mf-shell --port 4200 --type host
```

## Workspace

Para crear el monorepo es necesario crear el espacio de trabajo

```
ng new microfront-angular14 --create-application=false
```

# Microfront

Los [microfront](https://www.angulararchitects.io/en/aktuelles/the-microfrontend-revolution-module-federation-in-webpack-5/) viene de la idea de los microservicios del backend y se busca tener los mismos beneficios en el front, esto se puede lograr utilizando una funcionalidad de WebPack en su versión 5 llamada [module federation](https://webpack.js.org/concepts/module-federation/)

Angular integra WebPack 5 a partir de su versión 12 y el equipo de Angular Architects crearon un paquete de node para configurar los microfront de una forma "sencilla"

```
npm i @angular-architects/module-federation
```

Para ver el [repositorio, dale click aquí](https://www.npmjs.com/package/@angular-architects/module-federation?activeTab=readme)

![Estructura microfront-monorepo](/images/monorepo-microfront.png)
