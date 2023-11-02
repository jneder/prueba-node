const array = [["javascript", 10000], ["react", 5000], ["css", 5000], ["html",9000]]

const alumno_cursos = ["PYTHON","CSS", "REACT"]

function calcular_valor( listado_curso_precio, elecciones_alumno ){
    // crear una variable costo incializada en 0
    let costo_total = 0
    // Primero tenemos que pasar a mayuscula los cursos del listado
    for (let i = 0; i < listado_curso_precio.length; i++) {
        let mayuscula = listado_curso_precio [i][0].toUpperCase()
        listado_curso_precio[i][0] = mayuscula;             
    }
    // buscar si elecciones_alumno pertenece al array de listado
    for (let i = 0; i < listado_curso_precio.length; i++) {
        if (elecciones_alumno.includes(listado_curso_precio[i][0])){
            // si esta tomar el costo del curso y sumarlo a variable costo
            costo_total += listado_curso_precio[i][1]
        }                    
    }
     // devolver el costo total 
     return costo_total

}
console.log(calcular_valor(array, alumno_cursos));
// resolucion item d
function comprar_cursos(nombre, apellido, array, alumno_cursos, calcBack){
    let mensaje = `Estimado ${nombre} ${apellido}, en función de los cursos seleccionados:`
    for (let i = 0; i < alumno_cursos.length; i++) {
        mensaje = mensaje + `${i + 1}`
        
    }
}