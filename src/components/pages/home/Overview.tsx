import { Card } from "@/components/shared/Card";
import Link from "next/link";

export default function Overview() {
    return (
        <section aria-labelledby="overview-heading" className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            <Card className="lg:col-span-2" >
                <h2 id="overview-heading" className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                    Dashboard Overview
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-3">Recent Activity</h3>
                        <ul className="space-y-2 text-gray-600" role="list">
                            <li className="flex items-center" role="listitem">
                                <div className="w-2 h-2 bg-green-500 rounded-full mr-3 animate-ping" aria-hidden="true"></div>
                                <span>New posts published today</span>
                            </li>
                            <li className="flex items-center" role="listitem">
                                <div className="w-2 h-2 bg-primary rounded-full mr-3" aria-hidden="true"></div>
                                <span>User registrations this week</span>
                            </li>
                            <li className="flex items-center" role="listitem">
                                <div className="w-2 h-2 bg-purple-500 rounded-full mr-3" aria-hidden="true"></div>
                                <span>System updates completed</span>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-3">Quick Actions</h3>
                        <nav className="space-y-3" aria-label="Quick navigation actions">
                            <Link
                                href="/posts"
                                className="block w-full text-left p-3 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary/60 focus:ring-offset-2"
                                aria-label="Navigate to posts page to browse and manage content"
                            >
                                <div className="font-medium text-blue-800">View All Posts</div>
                                <div className="text-sm text-primary">Browse and manage content</div>
                            </Link>
                            <Link
                                href="/users"
                                className="block w-full text-left p-3 bg-green-50 hover:bg-green-100 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                                aria-label="Navigate to users page to view user profiles and details"
                            >
                                <div className="font-medium text-green-800">Manage Users</div>
                                <div className="text-sm text-green-600">View user profiles and details</div>
                            </Link>
                        </nav>
                    </div>
                </div>
            </Card>
        </section>)
}
