import { useCallback, useState } from 'react';

// import { shuffle } from '../useMemo-Hook/utils';
import Search from './Search';

const allUsers = [
  'john',
  'alex',
  'george',
  'simon',
  'james',
];

interface DemoProps {}

export default function Demo({}: DemoProps) {
  const [users, setUsers] = useState(allUsers);

  const handleSearch = useCallback((text: string) => {
    console.log(users[0]);
    const filteredUsers = allUsers.filter((user) =>
      user.includes(text)
    );
    setUsers(filteredUsers);
  }, [users]);

  function shuffle(allUsers: string[]): string[] {
    const shuffled = [...allUsers];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  }

  return (
    <div className='tutorial'>
      <div className='align-center mb-2 flex'>
        <button onClick={() => setUsers(shuffle(allUsers))}>
          Shuffle
        </button>

        <Search onChange={handleSearch} />
      </div>
      <ul>
        {users.map((user) => (
          <li key={user}>{user}</li>
        ))}
      </ul>
    </div>
  );
}
