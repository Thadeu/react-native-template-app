const createAsyngActionType = type => {
  return {
    REQUESTED: `${type}_REQUESTED`, 
    SUCCESS: `${type}_SUCCESS`, 
    ERROR: `${type}_ERROR`
  }
}

export const PERSONS_NEW = createAsyngActionType('persons_new')