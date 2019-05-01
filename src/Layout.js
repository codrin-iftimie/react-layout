import React, {useContext} from 'react';


const Context = React.createContext();

export default function LayoutWrap({children}) {
  const context = useContext(Context);
  const parentSlots = context ? context.slots : {};
  const contextValue = {
    slots: {...parentSlots},
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
  function Layout({children, ...rest}) {
    return (
      <LayoutWrap>
        {children}
        <Component {...rest} />
      </LayoutWrap>
    )
  }
  const displayName = Component.displayName || Component.name;
  Layout.displayName = displayName ? `Layout(${displayName})` : 'Layout'
  return Layout;
} 
