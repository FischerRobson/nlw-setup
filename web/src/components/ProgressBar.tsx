interface ProgressBarProps {
  progress: number;
}

export function ProgressBar({ progress }: ProgressBarProps) {
  return (
    <div className='h-3 rounded-xl bg-zinc-800 w-full mt-4'>
      <div
        role="progressbar"
        aria-label='progresso de hábitos nesse dia'
        aria-valuenow={progress}
        className='h-3 rounded-xl bg-violet-600'
        style={{ width: `${progress}%` }}
      />
    </div>
  )
}