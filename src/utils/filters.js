export const findMember = (id, user, members) => {
  const tempMembers = [user, ...members]
  return tempMembers.find(member => member.id === id)
}

export const getInitials = string => string.match(/\b(\w)/g).join('')
