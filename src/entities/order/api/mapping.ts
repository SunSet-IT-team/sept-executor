import {getImagePath} from '../../../shared/utils/share';
import {
    mapAddressDTO,
    mapCustomerDTO,
    mapExecutorDTO,
} from '../../user/api/mapping';
import {ExecutorReport, Order, Review, Service} from '../model/types';
import {OrderDTO, ReportDTO, ReviewDTO, ServiceDTO} from './dto';

/**
 * Переводим OrderDTO в нормальный Order
 */
export const mapOrderDTO = (data: OrderDTO): Order => {
    return {
        address: data.address ? data.address : '',
        city: data.city ? data.city : '',
        executor: data.executor ? mapExecutorDTO(data.executor) : null,
        customer: data.customer ? mapCustomerDTO(data.customer) : null,
        comment: data.comment || '',
        payment: data.paymentMethod,
        id: `${data.id}`,
        date: new Date(data.workDate).toLocaleDateString('ru'),
        status: data.status || data.orderStaus,
        service: mapServiceDTO(data.service),
        review: data.customerReview ? mapSReviewDTO(data.customerReview) : null,
        report: data.reports[0] ? mapReportDTO(data.reports[0]) : null,
        septicVolume: `${data.septicVolume}`,
        septicDepth: `${data.septicDepth}`,
        septicDistance: `${data.distanceToSeptic}`,
        object: data.objectType,
    };
};

/*
 * Переводим ServiceDTO в нормальный Service
 */
export const mapServiceDTO = (service: ServiceDTO): Service => {
    return {
        id: service.id,
        name: service.name,
        priority: service.priority,
    };
};

/**
 * Переводим ReviewDTO в нормальный Review
 */
export const mapSReviewDTO = (review: ReviewDTO): Review => {
    return {
        id: review.id,
        rating: review.rating,
        text: review.text,
    };
};

/**
 * Переводм ReportDTO в нормальный Report
 */
export const mapReportDTO = (report: ReportDTO): ExecutorReport => {
    return {
        id: report.id,
        total: report.total,
        files: report.files.map((el) => getImagePath(el.url)),
    };
};
