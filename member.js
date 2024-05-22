function skillsMember() {
  // Add a new member
  var member = {
    name: 'John',
    skills: ['JavaScript', 'React', 'Angular'],
  };

  // Add a new skill to the member
  member.skills.push('Node.js');

  // Remove a skill from the member
  member.skills = member.skills.filter(skill => skill !== 'React');

  return member;
}