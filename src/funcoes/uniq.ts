/**
 * Retorna um array com todos os elementos únicos.
 * 
 * > Importante: Os parâmetros não devem ter sua estrutura alterada.
 * 
 * @param items array com itens de qualquer tipo.
 * 
 * @returns somente os itens definidos.
 */
export const uniq = <T>(args: T[]): T[] => {
  const novoArray = []
  
  function conjuntoPossuiElemento (numeroDoConjunto: T , conjunto: T[]){
    const posicao = conjunto.indexOf(numeroDoConjunto)
    if (posicao >= 0){
        return true;
    }
    return false;
  }

  args.forEach(element => {
    const respPossuiElemento = conjuntoPossuiElemento(element, novoArray);
    if(!respPossuiElemento) {
      novoArray.push(element);
  }
  });

  return novoArray;
};