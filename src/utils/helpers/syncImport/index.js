async function syncImportJSON(URL){
    const data = await import(URL)
    data = JSON.parse(JSON.stringify(data))
    return data
}