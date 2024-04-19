import getRandomElemArray from "../utils/getRamdomElemArray"

const BtnQuote = ({ setQuote, phrases, setNumberBg, numberRandom }) => {

  const handleRamdomPharase = () => {
    setQuote(getRandomElemArray(phrases))
    setNumberBg(getRandomElemArray([1, 2, 3, 4]))
  }

  return (
    <button className="container__btn" onClick={handleRamdomPharase}>Probar mi Suerte</button>
  )
}

export default BtnQuote