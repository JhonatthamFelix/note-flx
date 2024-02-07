export function InputSearchNote (){
    return(
        <form className="w-full">
        <input
          type="text"
          placeholder="Busque suas notas..."
          className="w-full bg-transparent text-3xl font-semibold tracking-tight  outline-none placeholder:text-slate-500"
        />
      </form>
    )
}