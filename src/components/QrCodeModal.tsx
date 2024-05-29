import { FC, useEffect, useRef, useState } from 'react'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import { createPortal } from 'react-dom'
import { TbCheck, TbCopy, TbDownload } from 'react-icons/tb'
import { ILink } from '@/interfaces/link'

interface IQrCodeModal {
  open: boolean
  onClose: () => void
  link: ILink
}

const QrCodeModal: FC<IQrCodeModal> = ({ open, onClose, link }) => {
  const ref = useRef<HTMLDivElement>(null)

  const [copyButtonVisible, setCopyButtonVisible] = useState(false)
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    if (window.ClipboardItem) {
      setCopyButtonVisible(true)
    }
  }, [])

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        onClose()
      }
    }

    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [onClose])

  const qrCodeUrl = `${process.env.NEXT_PUBLIC_SERVER_URL}/links/${link.id}/qr-code`

  const handleClickDownload = async () => {
    const blob = await fetch(qrCodeUrl).then(res => res.blob())

    const url = URL.createObjectURL(blob)

    const linkElement = document.createElement('a')

    linkElement.href = url
    linkElement.download = `${link.short}.png`

    linkElement.click()
  }

  const handleClickCopy = async () => {
    const blob = await fetch(qrCodeUrl).then(res => res.blob())

    const clipboardItem = new ClipboardItem({ 'image/png': blob })

    await navigator.clipboard.write([clipboardItem])

    setCopied(true)

    setTimeout(() => setCopied(false), 1000)
  }

  if (!open) return null

  return createPortal(
    <div
      className={cn(
        'fixed inset-0 flex items-center justify-center bg-zinc-900/40'
      )}
    >
      <div className={cn('bg-zinc-800 p-7 rounded-md')} ref={ref}>
        <Image
          className={cn('rounded')}
          src={qrCodeUrl}
          width={200}
          height={200}
          alt='Qr-Code'
        />
        <div className={cn('flex gap-2 mt-2')}>
          <button
            className={cn('flex bg-zinc-700 p-2 rounded hover:bg-zinc-600')}
            onClick={handleClickDownload}
          >
            <TbDownload className={cn('w-6 h-6')} />
          </button>
          {copyButtonVisible && (
            <button
              className={cn('flex bg-zinc-700 p-2 rounded hover:bg-zinc-600')}
              onClick={handleClickCopy}
            >
              {!copied ? (
                <TbCopy className={cn('w-6 h-6')} />
              ) : (
                <TbCheck className={cn('w-6 h-6')} />
              )}
            </button>
          )}
        </div>
      </div>
    </div>,
    document.body
  )
}

export default QrCodeModal
