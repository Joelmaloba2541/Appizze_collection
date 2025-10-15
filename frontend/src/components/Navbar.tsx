import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { motion } from 'framer-motion'
import { useMemo } from 'react'

const links = [
  { name: 'Collection', href: '#collection' },
  { name: 'Milestones', href: '#milestones' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'Contact', href: '#contact' },
]

const Navbar = () => {
  const navShadow = useMemo(
    () => ({
      boxShadow: '0 10px 30px rgba(15,23,42,0.08), 0 1px 3px rgba(15,23,42,0.12)',
    }),
    [],
  )

  return (
    <Disclosure as="nav" className="fixed inset-x-0 top-0 z-50" style={navShadow}>
      {({ open }) => (
        <div className="mx-auto max-w-6xl rounded-b-3xl bg-surface px-4 py-3 shadow-sm">
          <div className="flex items-center justify-between">
            <motion.a
              href="#top"
              className="flex items-center gap-2 text-lg font-semibold tracking-tight text-glow"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-accent to-lagoon font-bold text-surface">
                AC
              </span>
              Appizzo Collection
            </motion.a>
            <div className="hidden items-center gap-6 md:flex">
              {links.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-glow/70 transition hover:text-glow"
                  whileHover={{ y: -2 }}
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.a
                href="#shop"
                className="rounded-full bg-gradient-to-r from-accent to-lagoon px-4 py-2 text-sm font-semibold text-surface shadow-lg shadow-accent/30"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                Shop Drop
              </motion.a>
            </div>
            <div className="md:hidden">
              <Disclosure.Button className="inline-flex items-center justify-center rounded-md bg-mist p-2 text-glow/70 hover:bg-mist/80">
                <span className="sr-only">Open main menu</span>
                {open ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
              </Disclosure.Button>
            </div>
          </div>

          <Disclosure.Panel className="mt-3 space-y-1 md:hidden">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block rounded-xl bg-surface px-3 py-2 text-sm font-medium text-glow/70 shadow-sm"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#shop"
              className="block rounded-xl bg-gradient-to-r from-accent to-lagoon px-3 py-2 text-center text-sm font-semibold text-surface shadow"
            >
              Shop Drop
            </a>
          </Disclosure.Panel>
        </div>
      )}
    </Disclosure>
  )
}

export default Navbar
