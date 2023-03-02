function Box({ children, ...props }) {
    return <div {...props}>{children}</div>
  }

  export default function App() {
    return <Box>Sally Montgomery</Box>
  }