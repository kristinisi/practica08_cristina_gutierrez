//creamos el módulo con las funciones genéricas que se puedan usar en diferentes puntos de la aplicación
//funciones para obtener y dejar una cookie y facilitar su acceso
function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  const expires = `expires=${d.toUTCString()}`;
  document.cookie = `${cname}=${cvalue};${expires};path=/`;
}
function getCookie(cname) {
  const re = new RegExp(`(?:(?:^|.*;\\s*)${cname}\\s*\\=\\s*([^;]*).*$)|^.*$`);
  return document.cookie.replace(re, "$1");
}
export { setCookie, getCookie };
