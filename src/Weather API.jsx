$.ajax({
    url: 'api.weatherunlocked.com/api/resortforecast/999001?app_id={APP_ID}&app_key={APP_KEY}',
    method: 'GET',
success: function(response){
    console.group(response)
    
}
})