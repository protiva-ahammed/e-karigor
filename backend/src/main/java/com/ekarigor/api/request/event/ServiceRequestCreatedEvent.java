package com.ekarigor.api.request.event;

import com.ekarigor.api.shared.event.DomainEvent;

public class ServiceRequestCreatedEvent extends DomainEvent {
    private final Long requestId;
    private final String customerPhone;
    private final String categorySlug;

    public ServiceRequestCreatedEvent(
            Long requestId,
            String customerPhone,
            String categorySlug) {
        super("SERVICE_REQUEST_CREATED");
        this.requestId = requestId;
        this.customerPhone = customerPhone;
        this.categorySlug = categorySlug;
    }

    public Long getRequestId() { return requestId; }
    public String getCustomerPhone() { return customerPhone; }
    public String getCategorySlug() { return categorySlug; }
}
