import { User } from '@/types';

interface UsersTableProps {
    users: User[];
    onUserClick: (user: User) => void;
}

export default function UsersTable({ users, onUserClick }: UsersTableProps) {
    const handleKeyDown = (event: React.KeyboardEvent, user: User) => {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            onUserClick(user);
        }
    };

    return (
        <div className="overflow-x-auto" role="region" aria-label="Users table">
            <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden" aria-label="List of users with their details">
                <thead className="bg-gray-50">
                    <tr role="row">
                        <th className="px-3 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                        <th className="px-3 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden sm:table-cell">Email</th>
                        <th className="px-3 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Company</th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {users.map((user, index) => (
                        <tr
                            key={user.id}
                            onClick={() => onUserClick(user)}
                            onKeyDown={(e) => handleKeyDown(e, user)}
                            className="hover:bg-gray-50 cursor-pointer transition-colors duration-150 focus:outline-none focus:bg-blue-50 focus:ring-2 focus:ring-primary/60 focus:ring-inset"
                        >
                            <td className="px-3 sm:px-6 py-4" role="gridcell">
                                <div className="text-sm font-medium text-gray-900">{user.name}</div>
                                <div className="text-sm text-gray-500">@{user.username}</div>
                                {/* Show email on mobile when hidden in header */}
                                <div className="text-sm text-gray-500 sm:hidden mt-1">{user.email}</div>
                            </td>
                            <td className="px-3 sm:px-6 py-4 hidden sm:table-cell" role="gridcell">
                                <div className="text-sm text-gray-900">{user.email}</div>
                            </td>
                            <td className="px-3 sm:px-6 py-4" role="gridcell">
                                <div className="text-sm text-gray-900">{user.company.name}</div>
                                <div className="text-sm text-gray-500 truncate max-w-xs">{user.company.catchPhrase}</div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Screen reader instructions */}
            <div className="sr-only">
                Press Enter or Space to view user details. Use Tab to navigate between users.
            </div>
        </div>
    );
}