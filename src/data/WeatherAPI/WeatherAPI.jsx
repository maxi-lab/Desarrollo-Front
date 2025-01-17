export async function recuperar() {

   const response= fetch('https://api.weatherunlocked.com/api/resortforecast/54884003?app_id=30129f08&app_key=d9734555a33fbf13252c9234f2619bef')
    .then((response) => response.json())
    .then((forecast) => {
        return forecast;})
    return response;
}
