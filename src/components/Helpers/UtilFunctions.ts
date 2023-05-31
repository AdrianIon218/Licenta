

export const orderRandom = <T>(arr:T[])=>{
    arr.sort((a, b) => 0.5 - Math.random());
}