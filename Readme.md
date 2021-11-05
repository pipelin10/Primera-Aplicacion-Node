# Explicación:

Primera aplicación realizada mediante Node.js, permite escribir una tabla de multiplicar en un archivo, además se puede listar y se puede establecer el límite hasta el cual podemos llegar.

Para correr la aplicación ejecutamos:

```
node app -b 4
```

En la anterior línea creamos la tabla del 4 hasta el límite 10.

```
Options:
      --help     Show help                                             [boolean]
      --version  Show version number                                   [boolean]
  -b, --base     Indica la base con la cual se va a crear la tabla
                                                             [number] [required]
  -l, --listar   Permite listar la tabla a escribir en un archivo
                                                    [boolean] [default: "false"]
  -t, --tope     Indica el tope hasta el cual vamos a crear la tabla
                                                          [number] [default: 10]
```