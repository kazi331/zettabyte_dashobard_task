import Modal from '@/components/ui/Modal';
import { User } from '@/types/api';

interface UserModalProps {
    isOpen: boolean;
    onClose: () => void;
    user: User | null;
}

export default function UserModal({ isOpen, onClose, user }: UserModalProps) {
    if (!user) return null;

    return (
        <Modal isOpen={isOpen} onClose={onClose} title={`User Details - ${user.name}`}>
            <div className="space-y-6 max-h-[70vh] overflow-y-auto">
                {/* Basic Information */}
                <section >
                    <h3 id="basic-info-heading" className="text-lg font-medium text-gray-900 mb-3">Basic Information</h3>
                    <dl className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div>
                            <dt className="text-sm font-medium text-gray-500">Name:</dt>
                            <dd className="text-sm text-gray-900 mt-1">{user.name}</dd>
                        </div>
                        <div>
                            <dt className="text-sm font-medium text-gray-500">Username:</dt>
                            <dd className="text-sm text-gray-900 mt-1">@{user.username}</dd>
                        </div>
                        <div>
                            <dt className="text-sm font-medium text-gray-500">Email:</dt>
                            <dd className="text-sm text-gray-900 mt-1">
                                <a
                                    href={`mailto:${user.email}`}
                                    className="text-primary hover:text-accent focus:outline-none focus:ring-2 focus:ring-primary/60 focus:ring-offset-1 rounded"
                                >
                                    {user.email}
                                </a>
                            </dd>
                        </div>
                        <div>
                            <dt className="text-sm font-medium text-gray-500">Phone:</dt>
                            <dd className="text-sm text-gray-900 mt-1">
                                <a
                                    href={`tel:${user.phone}`}
                                    className="text-primary hover:text-accent focus:outline-none focus:ring-2 focus:ring-primary/60 focus:ring-offset-1 rounded"
                                >
                                    {user.phone}
                                </a>
                            </dd>
                        </div>
                        <div className="sm:col-span-2">
                            <dt className="text-sm font-medium text-gray-500">Website:</dt>
                            <dd className="text-sm text-gray-900 mt-1">
                                <a
                                    href={`https://${user.website}`}
                                    target="_blank"
                                    className="text-primary hover:text-accent focus:outline-none focus:ring-2 focus:ring-primary/60 focus:ring-offset-1 rounded"
                                >
                                    {user.website}
                                </a>
                            </dd>
                        </div>
                    </dl>
                </section>

                {/* Address Information */}
                <section >
                    <h3 id="address-info-heading" className="text-lg font-medium text-gray-900 mb-3">
                        Address
                    </h3>
                    <div className="bg-gray-50 p-3 rounded-md">
                        <address className="not-italic">
                            <p className="text-sm text-gray-900">
                                {user.address.suite} {user.address.street}
                            </p>
                            <p className="text-sm text-gray-900">
                                {user.address.city}, {user.address.zipcode}
                            </p>
                        </address>
                        <div className="text-xs text-gray-500 mt-2">
                            <span className="sr-only">Geographic coordinates: </span>
                            <span>
                                Coordinates: {user.address.geo.lat}, {user.address.geo.lng}
                            </span>
                        </div>
                    </div>
                </section>

                {/* Company Information */}
                <section>
                    <h3 id="company-info-heading" className="text-lg font-medium text-gray-900 mb-3">
                        Company
                    </h3>
                    <div className="bg-gray-50 p-3 rounded-md">
                        <h4 className="text-sm font-medium text-gray-900 mb-1">{user.company.name}</h4>
                        <blockquote className="text-sm text-gray-600 italic mb-2">
                            &ldquo;{user.company.catchPhrase}&rdquo;
                        </blockquote>
                        <p className="text-xs text-gray-500">
                            {user.company.bs}
                        </p>
                    </div>
                </section>
            </div>
        </Modal>
    );
}