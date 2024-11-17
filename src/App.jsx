import { useEffect, useState } from 'react'

function App() {
  const [command, setCommand] = useState('')
  const [name, setName] = useState('')
  const [star, setStar] = useState(false)
  const [color, setColor] = useState('white')
  const [colorAll, setColorAll] = useState('white')
  const [item, setItem] = useState('')
  const [reason, setReason] = useState('')
  const [message, setMessage] = useState('')
  const [messageAll, setMessageAll] = useState('')
  const [isPressed, setIsPressed] = useState(false)
  const [customReason, setCustomReason] = useState(false)
  const [result, setResult] = useState('')

  const handleCopy = () => {
    navigator.clipboard
      .writeText(result)
      .then(() => {
        alert('Texto copiado para a área de transferência!')
      })
      .catch(err => {
        console.error('Erro ao copiar texto: ', err)
      })
  }

  var starter = `playerchatwheel CW.1 "Ping Site A `
  for (let i = 0; i < 59; i++) {
    starter += '\u2800'
  }
  const colors = {
    white: '',
    'neon-red': '',
    cream: '',
    'neon-green': '',
    'light-green': '',
    green: '',
    red: '',
    grey: '',
    'light-yellow': '	',
    orange: '',
    blue: '',
    purple: '',
    pink: '',
    salmon: ''
  }

  useEffect(() => {
    switch (command) {
      case 'container':
        setResult(
          starter +
            `  ${name} abriu um recipiente e encontrou: ${colors[color]}${
              star ? '★' : ''
            } ${item}"`
        )
        break
      case 'ban':
        setResult(
          starter +
            `  ${name} foi banido permanentemente dos servidores oficiais do CS2"`
        )
        break
      case 'left':
        setResult(starter + ` ${name} saiu da partida (${reason})"`)
        break
      case 'trade':
        setResult(
          starter +
            `  ${name} trocou por: ${colors[color]}${star ? '★' : ''} ${item}"`
        )
        break
      case 'msg':
        setResult(starter + ` [TODOS]  ${name}: ${message}"`)
        break
      case 'all':
        setResult(starter + (name ? `  ${name}` : '') + ` ${messageAll}"`)
        break
      default:
        setResult('')
        break
    }
  }, [command, name, star, color, item, reason, message, messageAll])

  return (
    <div className="justify-center items-center flex flex-col p-16 gap-16">
      <h1 className="text-5xl">Mega Fake Command Generator</h1>
      <div className="h-80 w-2/3 bg-slate-200 flex border-2 border-black rounded-lg flex-col items-center p-10 gap-12">
        <div className="flex flex-col w-full items-center gap-2">
          <label htmlFor="commandType" className="text-lg">
            Tipo de Comando
          </label>
          <select
            name="commandType"
            id="commandType"
            className="w-1/4 p-1 border-black border rounded"
            onChange={e => setCommand(e.target.value)}
          >
            <option value="ban">Banido dos servidores</option>
            <option value="container">Abrir um container</option>
            <option value="left">Saiu da partida</option>
            <option value="trade">Recebeu um item</option>
            <option value="msg">Outra pessoa falando</option>
            <option value="all">Criador geral</option>
          </select>
        </div>
        <div className="flex gap-16">
          <div className="flex flex-col w-full items-center gap-2">
            <label htmlFor="name" className="text-lg">
              Nome do Player
            </label>
            <input
              type="text"
              id="name"
              className="p-2 border border-black rounded"
              onChange={e => setName(e.target.value)}
              value={name}
            />
          </div>
          {(command === 'container' || command === 'trade') && (
            <>
              <div className="flex flex-col w-full items-center justify-center gap-2">
                <label htmlFor="star" className="text-lg">
                  Estrela ★
                </label>
                <input
                  type="checkbox"
                  name="star"
                  id="star"
                  className="h-10 w-10"
                  onChange={e => setStar(e.target.checked)}
                />
              </div>
              <div className="flex flex-col w-full items-center justify-center gap-2">
                <label htmlFor="color" className="text-lg">
                  Cor do item
                </label>
                <select
                  name="color"
                  id="color"
                  className="p-2 border border-black rounded"
                  onChange={e => setColor(e.target.value)}
                >
                  <option value="white">Branco</option>
                  <option value="neon-red">Vermelho Neon</option>
                  <option value="cream">Creme (T) ou Azul Claro (CT)</option>
                  <option value="neon-green">Verde Neon</option>
                  <option value="light-green">Verde Claro</option>
                  <option value="green">Verde</option>
                  <option value="red">Vermelho</option>
                  <option value="grey">Cinza</option>
                  <option value="light-yellow">Amarelo Claro</option>
                  <option value="orange">Laranja</option>
                  <option value="blue">Azul (Item)</option>
                  <option value="purple">Roxo (Item)</option>
                  <option value="pink">Roxa (Item)</option>
                  <option value="salmon">Salmão (Luvas e Facas)</option>
                </select>
              </div>
              <div className="flex flex-col w-full items-center justify-center gap-2">
                <label htmlFor="item" className="text-lg">
                  Item
                </label>
                <input
                  type="text"
                  id="item"
                  className="p-2 border border-black rounded w-64"
                  onChange={e => setItem(e.target.value)}
                  value={item}
                />
              </div>
            </>
          )}
          {command === 'left' && (
            <div className="flex flex-col w-full items-center gap-2">
              <label htmlFor="reason" className="text-lg">
                Motivo
              </label>
              {customReason ? (
                <input
                  type="text"
                  id="reason"
                  className="p-2 border border-black rounded w-48"
                  onChange={e => setReason(e.target.value)}
                  value={reason}
                />
              ) : (
                <select
                  name="reason"
                  id="reason"
                  className="p-2 border border-black rounded"
                  onChange={e => setReason(e.target.value)}
                >
                  <option value="Usuário(a) desconectou-se">
                    Desconectou-se
                  </option>
                  <option value="Expulso(a) por meio de votação">
                    Expulso por votação
                  </option>
                  <option value="Não foi possivel estabelecer uma conexão ao servidor.">
                    Conexão com server
                  </option>
                  <option value="Banido de servidores protegidos pelo VAC">
                    Vac ban
                  </option>
                  <option value="O VAC não pode verificar a sessão">
                    Vac kick
                  </option>
                  <option value="Desconectado por inatividade">
                    Inatividade
                  </option>
                  <option value="Desconectado por erro desconhecido">
                    Erro desconhecido
                  </option>
                </select>
              )}
              <div className="flex gap-2 items-center">
                <input
                  type="checkbox"
                  name="customReason"
                  id="customReason"
                  className="h-6 w-6"
                  onChange={e => setCustomReason(e.target.checked)}
                />
                <label htmlFor="customReason" className="select-none">
                  Motivo customizado
                </label>
              </div>
            </div>
          )}
          {command === 'msg' && (
            <div className="flex flex-col w-full items-center gap-2">
              <label htmlFor="message" className="text-lg">
                Mensagem
              </label>
              <input
                type="text"
                id="message"
                className="p-2 border border-black rounded w-80"
                onChange={e => setMessage(e.target.value)}
                value={message}
              />
            </div>
          )}
          {command === 'all' && (
            <>
              <div className="flex flex-col w-full items-center gap-2">
                <label htmlFor="messageAll" className="text-lg">
                  Mensagem
                </label>
                <textarea
                  id="messageAll"
                  className="p-2 border border-black rounded w-80 h-24"
                  onChange={e => setMessageAll(e.target.value)}
                  value={messageAll}
                />
              </div>
              <div className="w-full h-56 flex flex-col items-center -translate-y-8">
                <h2 className="text-lg">Adicionar variantes</h2>
                <div className="p-3 border-black border-2 flex flex-row rounded gap-6">
                  <div className="flex flex-col w-full items-center gap-2">
                    <h1>Estrela</h1>
                    <button
                      className={`bg-white h-10 w-10 border border-black rounded text-2xl ${
                        isPressed ? 'opacity-50' : 'opacity-100'
                      }`}
                      onMouseDown={() => setIsPressed(true)}
                      onMouseUp={() => setIsPressed(false)}
                      onClick={() => setMessageAll(messageAll + ' ★')}
                    >
                      ★
                    </button>
                  </div>
                  <div className="flex flex-col w-full items-center">
                    <label htmlFor="colorAll">Cor</label>
                    <select
                      name="colorAll"
                      id="colorAll"
                      className="p-2 border border-black rounded"
                      onChange={e => setColorAll(e.target.value)}
                    >
                      <option value="white">Branco</option>
                      <option value="neon-red">Vermelho Neon</option>
                      <option value="cream">
                        Creme (T) ou Azul Claro (CT)
                      </option>
                      <option value="neon-green">Verde Neon</option>
                      <option value="light-green">Verde Claro</option>
                      <option value="green">Verde</option>
                      <option value="red">Vermelho</option>
                      <option value="grey">Cinza</option>
                      <option value="light-yellow">Amarelo Claro</option>
                      <option value="orange">Laranja</option>
                      <option value="blue">Azul (Item)</option>
                      <option value="purple">Roxo (Item)</option>
                      <option value="pink">Roxa (Item)</option>
                      <option value="salmon">Salmão (Luvas e Facas)</option>
                    </select>
                    <div className="p-1 flex flex-row gap-1 justify-center items-center w-full">
                      <button
                        className="bg-white border border-black rounded w-1/2"
                        onClick={() =>
                          setMessageAll(messageAll + colors[colorAll])
                        }
                      >
                        Inserir
                      </button>
                      <button
                        className="bg-white border border-black rounded w-1/2"
                        onClick={() => setMessageAll(messageAll + '')}
                      >
                        Retirar
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
      <div className="flex flex-col w-1/2 gap-2">
        <textarea
          name="result"
          id="result"
          className="border-black border-2 h-44 w-full p-2 min-h-36"
          disabled
          value={result}
        ></textarea>
        <button
          className="border-black border-2 p-2 w-36 self-end"
          onClick={handleCopy}
        >
          Copiar
        </button>
      </div>
    </div>
  )
}

export default App
