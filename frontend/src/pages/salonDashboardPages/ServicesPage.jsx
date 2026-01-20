import React, { useEffect, useState } from "react";
import { Plus, Clock, SquarePen, Trash2, X, DollarSign } from "lucide-react";
import api from "../../api/axios";
import AddServiceModal from "../../components/modals/salonDashboardModals/AddServiceModal";
import EditServiceModal from "../../components/modals/salonDashboardModals/EditServiceModal";

const Services = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [currentService, setCurrentService] = useState(null);

  /* =========================
     FETCH SERVICES
  ========================= */
  useEffect(() => {
    const fetchServices = async () => {
      try {
        const res = await api.get("/services");
        setServices(res.data);
      } catch (error) {
        console.error(error.response?.data?.message);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  /* =========================
     ADD SERVICE
  ========================= */
  const addService = async (service) => {
    try {
      const res = await api.post("/services", service);
      setServices((prev) => [res.data, ...prev]);
      setShowAddModal(false);
    } catch (error) {
      alert(error.response?.data?.message || "Failed to add service");
    }
  };

  /* =========================
     UPDATE SERVICE
  ========================= */
  const updateService = async (updatedService) => {
    try {
      const res = await api.put(
        `/services/${updatedService._id}`,
        updatedService,
      );

      setServices((prev) =>
        prev.map((s) => (s._id === res.data._id ? res.data : s)),
      );

      setShowEditModal(false);
    } catch (error) {
      alert("Failed to update service");
    }
  };

  /* =========================
     DELETE SERVICE
  ========================= */
  const deleteService = async () => {
    try {
      await api.delete(`/services/${currentService._id}`);
      setServices((prev) => prev.filter((s) => s._id !== currentService._id));
      setShowDeleteModal(false);
    } catch (error) {
      alert("Failed to delete service");
    }
  };

  return (
    <div className="p-2">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl text-black font-bold">Services</h1>
          <p className="text-gray-500">Manage your salon services</p>
        </div>

        <button
          onClick={() => setShowAddModal(true)}
          className="flex items-center gap-2 bg-purple-600 text-white px-5 py-2 rounded-lg"
        >
          <Plus size={18} />
          Add Service
        </button>
      </div>

      {loading ? (
        <p className="text-center text-gray-500">Loading services...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service) => (
            <div key={service.id} className="bg-white rounded-xl p-5 shadow-sm">
              <div className="flex justify-between">
                <h2 className="text-xl font-bold text-black">{service.name}</h2>
                <div className="flex gap-3">
                  <button
                    onClick={() => {
                      setCurrentService(service);
                      setShowEditModal(true);
                    }}
                  >
                    <SquarePen size={18} className="text-purple-600" />
                  </button>
                  <button
                    onClick={() => {
                      setCurrentService(service);
                      setShowDeleteModal(true);
                    }}
                  >
                    <Trash2 size={18} className="text-red-500" />
                  </button>
                </div>
              </div>

              <div className="flex items-center gap-2 text-gray-500 mt-2">
                <Clock size={16} />
                {service.duration}
              </div>

              <div className="mt-4 text-lg font-bold text-black flex items-center">
                <DollarSign className="text-green-500" /> ${service.price}
              </div>
            </div>
          ))}
        </div>
      )}

      {showAddModal && (
        <AddServiceModal
          onClose={() => setShowAddModal(false)}
          onSave={addService}
        />
      )}

      {showEditModal && (
        <EditServiceModal
          service={currentService}
          onClose={() => setShowEditModal(false)}
          onSave={updateService}
        />
      )}

      {/* Delete Modal*/}
      {showDeleteModal && (
        <Modal onClose={() => setShowDeleteModal(false)}>
          <h2 className="text-lg font-semibold text-black mb-3">
            Delete Service
          </h2>
          <p className="text-gray-500 mb-6">
            Are you sure you want to delete{" "}
            <strong>{currentService.name}</strong>?
          </p>

          <div className="flex justify-end gap-3">
            <button
              onClick={() => setShowDeleteModal(false)}
              className="px-4 py-2 rounded-lg border"
            >
              Cancel
            </button>
            <button
              onClick={deleteService}
              className="px-4 py-2 rounded-lg bg-red-500 text-white"
            >
              Delete
            </button>
          </div>
        </Modal>
      )}
    </div>
  );
};

/* =========================
   BASE MODAL
========================= */
const Modal = ({ children, onClose }) => (
  <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
    <div className="bg-white rounded-xl w-full max-w-md p-6 relative">
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-gray-500"
      >
        <X size={20} />
      </button>
      {children}
    </div>
  </div>
);

export default Services;
