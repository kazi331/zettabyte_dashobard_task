import { User } from '@/types'

export default function AuthorBlock({ author }: { author: User }) {
    return (
        <div>
            <div className="pt-4 border-b border-b-gray-100 mb-2">
                <h2 className="text-lg font-semibold text-gray-900">About the Author</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <h3 className="font-medium text-gray-900 mb-2">{author.name}</h3>
                    <div className="space-y-1 text-sm text-gray-600">
                        <p>Username: @{author.username}</p>
                        <p>Email: {author.email}</p>
                        <p>Phone: {author.phone}</p>
                        <p>Website: {author.website}</p>
                    </div>
                </div>
                <div>
                    <h4 className="font-medium text-gray-900 mb-2">Company</h4>
                    <div className="space-y-1 text-sm text-gray-600">
                        <p className="font-medium">{author.company.name}</p>
                        <p className="italic">&quot;{author.company.catchPhrase}&quot;</p>
                        <p>{author.company.bs}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
