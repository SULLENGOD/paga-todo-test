export const getBanks = async () => {
    
    const url = 'https://dev.obtenmas.com/catom/api/challenge/banks';
    const res = await fetch( url );
    const banksData = await res.json();

    return banksData;

}