import React, {useContext} from 'react';


const Context = React.createContext();

export default function Layout({children}) {
  const contextValue = {
    slots: {},
    register(name, value) {
      this.slots[name] = value;
  
      return null;
    },
    use(name) {
      return this.slots[name];
    }
  }
  return (
    <Context.Provider value={contextValue}>
      {children}
    </Context.Provider>
  );
}

export function Slot({name, children}) {
  const context = useContext(Context);
  if (!context) {
    return children || null;
  }
  const content = context.use(name);
  if (content === undefined) {
    return children || null;
  }
  return content;
}

export function Fill({name, children}) {
  const context = useContext(Context);
  if (!context) {
    return null;
  }
  return context.register(name, children);
}

export function createLayout(Component) {
  return function Extent({children, ...rest}) {
    return (
      <Layout>
        {children}
        <Component {...rest} />
      </Layout>
    )
  }
} 
